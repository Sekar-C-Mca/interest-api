export default function handler(req, res) {
  const { principal, rate, time } = req.query;

  if (!principal || !rate || !time) {
    return res.status(400).json({ error: "Missing params" });
  }

  const interest = (principal * rate * time) / 100;
  res.json({ interest });
}
