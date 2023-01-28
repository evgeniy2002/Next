import { NextApiRequest, NextApiResponse } from 'next';

interface MessageApiReq extends NextApiRequest {
  query: {
    message: string;
  };
}

export default function echo(req: MessageApiReq, res: NextApiResponse) {
  res.json({
    message: req.query.message,
  });
}
