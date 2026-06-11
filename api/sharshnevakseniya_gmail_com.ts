export default function handler(req, res) {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  const isNatural = (n) => {
    return Number.isInteger(n) && n > 0;
  };

  if (!isNatural(x) || !isNatural(y)) {
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send("NaN");
  }

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  const lcm = (x * y) / gcd(x, y);

  res.setHeader("Content-Type", "text/plain");
  return res.status(200).send(String(lcm));
}
