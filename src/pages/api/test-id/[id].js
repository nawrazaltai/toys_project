

export default function testById(req, res) {

  res.json({id: req.query.id})
}