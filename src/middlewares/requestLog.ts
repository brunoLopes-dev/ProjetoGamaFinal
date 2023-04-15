import { Request, Response, NextFunction } from 'express';

const requestLog = (req: Request, res: Response, next: NextFunction) => {
  console.log(`O IP: ${req.ip} acessou a rota: ${req.originalUrl}`);
  next();
};

export default requestLog;