function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  noStroke();
  fill(0, 10);

  // Use Perlin noise to create a stream-like flow
  let t = frameCount / 100;
  for (let i = 0; i < width; i += 10) {
    let flow = noise(t + i * 0.05) * height;
    ellipse(i, flow, 8, 8);
  }
}