import { NextResponse } from "next/server";

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  console.log("req.body:", req.body);
  const { prompt } = await req.json();

  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // See https://replicate.com/mejiabrayan/logoai
        version:
          "67ed00e8999fecd32035074fa0f2e9a31ee03b57a8415e6a5e2f93a242ddd8d2",
        input: {
          prompt: `
        **CONTEXT:** You are an expert Designer, specialized in crafting compelling logos for various companies.
        -------
        **FORMAT:** You will receive the name of the logo and select 1 out of 3 style options from the user.
        -------
        **OBJECTIVE:** Your task is to analyze the provided data – the logo name and chosen style – and create a minimalist logo that resonates with the brand identity.
        -------
        **INSTRUCTIONS:**
        
        Generate the logo using the Logo name: ${prompt.logoName}, and the below style option of: ${prompt.style}.
        
        1. **Logo on Top of the Logo Name**:
           - Generate an image where the logo is positioned at the top center of the canvas.
           - Place the logo name directly below the logo, centered horizontally.
           - Ensure that both the logo and the logo name are proportionally sized to maintain visual balance.
           - Apply complementary colors to the logo and the logo name to enhance readability and aesthetic appeal.
        
        2. **Logo and Name Side by Side**:
           - Create an image where the logo is positioned on the left side of the canvas.
           - Place the logo name next to the logo, aligned vertically with the center of the logo.
           - Adjust the size of the logo and the logo name to ensure that they fit within the canvas width without overlapping.
           - Use whitespace or background elements to separate the logo and the logo name visually.
           - Experiment with different arrangements and alignments to find the most visually appealing composition.
        
        3. **Logo Icon Itself**:
           - Generate an image that solely features the logo icon without any accompanying text.
           - Center the logo icon within the canvas, ensuring that it occupies a significant portion of the available space.
           - Experiment with different background colors or patterns to complement the logo icon and make it stand out.
           - Apply visual effects or embellishments to enhance the appearance of the logo icon, such as gradients, shadows, or textures.
           - Ensure that the image resolution is high enough to maintain the clarity and detail of the logo icon, especially if it contains intricate elements.
        ---`,
        },
      }),
    });

    if (response.status !== 201) {
      let error = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status} | detail: ${error.detail}`
      );
    }

    let prediction = await response.json();
    console.log("first prediction:", prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      try {
        const response = await fetch(
          "https://api.replicate.com/v1/predictions/" + prediction.id,
          {
            headers: {
              Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status !== 200) {
          let error = await response.json();
          throw new Error(
            `HTTP error! status: ${response.status} | detail: ${error.detail}`
          );
        }

        prediction = await response.json();
        console.log("loop prediction:", prediction);
      } catch (error) {
        console.log(error);
      }
    }
    const imageUrl = prediction.output[prediction.output.length - 1];
    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error(error);
    return new Response(error?.message || error?.toString(), {
      status: 500,
    });
  }
}
