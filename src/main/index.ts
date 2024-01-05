import { ensureProcess } from '../common';
ensureProcess('main');

import { Integrations as NodeIntegrations } from '@sentry/node';

import * as ElectronMainIntegrations from './integrations';

export type {
  Breadcrumb,
  BreadcrumbHint,
  PolymorphicRequest,
  Request,
  SdkInfo,
  Event,
  EventHint,
  Exception,
  Session,
  // eslint-disable-next-line deprecation/deprecation
  Severity,
  SeverityLevel,
  Span,
  StackFrame,
  Stacktrace,
  Thread,
  Transaction,
  User,
} from '@sentry/types';

export {
  // eslint-disable-next-line deprecation/deprecation
  addGlobalEventProcessor,
  addEventProcessor,
  addBreadcrumb,
  addIntegration,
  captureException,
  captureEvent,
  captureMessage,
  // eslint-disable-next-line deprecation/deprecation
  configureScope,
  createTransport,
  // eslint-disable-next-line deprecation/deprecation
  extractTraceparentData,
  getActiveTransaction,
  getHubFromCarrier,
  getCurrentHub,
  getClient,
  getCurrentScope,
  getGlobalScope,
  getIsolationScope,
  Hub,
  makeMain,
  runWithAsyncContext,
  Scope,
  startTransaction,
  setContext,
  setExtra,
  setExtras,
  setTag,
  setTags,
  setUser,
  spanStatusfromHttpCode,
  // eslint-disable-next-line deprecation/deprecation
  trace,
  withScope,
  captureCheckIn,
  withMonitor,
  setMeasurement,
  getActiveSpan,
  startSpan,
  // eslint-disable-next-line deprecation/deprecation
  startActiveSpan,
  startInactiveSpan,
  startSpanManual,
  continueTrace,
  metrics,
} from '@sentry/core';
export type { SpanStatusType } from '@sentry/core';

export type { NodeOptions } from '@sentry/node';
// eslint-disable-next-line deprecation/deprecation
export { flush, close, NodeClient, lastEventId } from '@sentry/node';

export { makeElectronTransport } from './transports/electron-net';
export { makeElectronOfflineTransport } from './transports/electron-offline-net';
export const Integrations = { ...NodeIntegrations, ...ElectronMainIntegrations };

export type { ElectronMainOptions } from './sdk';
export { init, defaultIntegrations } from './sdk';
export { IPCMode } from '../common';
// eslint-disable-next-line deprecation/deprecation
export { enableMainProcessAnrDetection } from './anr';
