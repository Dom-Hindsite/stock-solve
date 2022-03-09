import { ParamsDictionary, Query } from "express-serve-static-core";
import { Request } from "express";

type MessagingWebhookBody = {
  MessageSid: string;
  Body: string;
  From: string;
  To: string;
};

export type MessagingRequest = Request<
  ParamsDictionary,
  any,
  MessagingWebhookBody,
  Query
>;

export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}