import fsPromises from 'fs/promises';
import path from 'path';

export default async function (req, res) {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  objectData['downloads'] = objectData['downloads'] + 1;

  fsPromises.writeFile(filePath, JSON.stringify(objectData));

  res.status(200).json(objectData['downloads']);
}
