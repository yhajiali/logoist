import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { ratelimit } from "../../../lib/limiter";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  const ip = req.ip ?? "127.0.0.1";
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      {
        error: {
          message: "Rate limit reached",
          limit,
          reset,
          remaining,
        },
      },
      { status: 429 }
    );
  }

  const body = await req.text();
  const { prompt } = JSON.parse(body);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `CONTEXT: You are an expert Designer, specialized in crafting compelling logos for various companies.
        -------
        FORMAT: You will receive the name of the logo, the description of the brand and a style option from the user.
        -------
        OBJECTIVE: Your task is to analyze the provided data – the logo name, description and chosen style – and create a minimalistic logo design that resonates with the brand identity.
        -------
        INSTRUCTIONS: Given the description of the brand: ${prompt.logoDescription}, the Logo name: ${prompt.logoName}, and the style option of: ${prompt.style} below. 
        
        CREATE A MINIMALISTIC LOGO WITH A COMPLETELY BLACKED OUT CANVAS. DO NOT INCLUDE ANY OTHER IMAGE, DESIGN OR TEXT OTHER THAN THE LOGO ICON AND THE LOGO NAME: "${prompt.logoName}" ITSELF.
        
       if the style option: "${prompt.style}" matches one of the following then generate the logo using that specific instruction only: 
  
       1. Side-by-Side Logo and Name:
        - Generate a logo with the logo icon positioned on the left side of the canvas.
        - Place the logo name next to the logo icon, aligned vertically with the center of the logo.
        - Adjust the size of the logo and the logo name to ensure that they fit within the canvas width without overlapping.
        - Use whitespace or background elements to separate the logo and the logo name visually.
        - Experiment with different arrangements and alignments to find the most visually appealing composition.
        -------
        2. Logo on Top of the Logo Name:
        - Generate a logo with the logo icon positioned at the top center of the canvas.
        - Place the logo name directly below the logo, centered horizontally.
        - Ensure that both the logo and the logo name are proportionally sized to maintain visual balance.
        - Apply complementary colors to the logo and the logo name to enhance readability and aesthetic appeal.
        -------
        3. Logo Icon Itself:
        - Generate the Logo that solely features the logo icon without any accompanying text.
        - Center the logo icon within the canvas, ensuring that it occupies a significant portion of the available space.
        - Experiment with different background colors or patterns to complement the logo icon and make it stand out.
        - Apply visual effects or embellishments to enhance the appearance of the logo icon, such as gradients, shadows, or textures.
        - Ensure that the image resolution is high enough to maintain the clarity and detail of the logo icon, especially if it contains intricate elements.`,
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response?.data?.[0]?.url;
    console.log("imageUrl:", imageUrl);
    return NextResponse.json({ imageUrl, remaining });
  } catch (error: any) {
    console.error(error);
    return new Response(error?.message || error?.toString(), {
      status: 500,
    });
  }
}
