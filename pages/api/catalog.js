import { getCatalog } from "helpers/square";

const handler = async (req, res) => {
  const response = await getCatalog();
  res.status(200).send("Successfully Completed");
};

export default handler;
