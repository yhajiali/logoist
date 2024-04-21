import { NextResponse } from 'next/server';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  console.log('req.body:', req.body);
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
        version: "67ed00e8999fecd32035074fa0f2e9a31ee03b57a8415e6a5e2f93a242ddd8d2",
        input: { prompt: prompt },
      }),
    });

    if (response.status !== 201) {
      let error = await response.json();
      throw new Error(`HTTP error! status: ${response.status} | detail: ${error.detail}`);
    }

    let prediction = await response.json();
    console.log('first prediction:', prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise(resolve => { setTimeout(resolve, 1000); });
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
          throw new Error(`HTTP error! status: ${response.status} | detail: ${error.detail}`);
        }
  
        prediction = await response.json();
        console.log('loop prediction:', prediction);
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
    })
  }
};