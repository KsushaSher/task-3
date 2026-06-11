export default function handler(req, res) {
  const xStr = req.query.x;
  const yStr = req.query.y;

  const isNatural = (str) => {
    return /^[1-9]\d*$/.test(str);
  };

  if (!isNatural(xStr) || !isNatural(yStr)) {
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send("NaN");
  }

  const x = BigInt(xStr);
  const y = BigInt(yStr);

  function gcd(a, b) {
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  const lcm = (x * y) / gcd(x, y);

  res.setHeader("Content-Type", "text/plain");
  return res.status(200).send(lcm.toString());
}
