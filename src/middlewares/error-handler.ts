import Express, { Request, Response, NextFunction } from 'express';
import BaseError from '../errors/base-error';

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }

  return res.status(400).json({
    'mesasge': 'Something went wrong',
  })
}