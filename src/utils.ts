import { type Options } from '@loskir/styled-qr-code-node';

import {
  type Service,
  type ServiceGroupsToLabels,
  type Services,
} from '@/db/models/participant';

/**
 * Generates configuration for QR Code Generator.
 *
 * @param {string} code A unique UUID-4 representing a participant
 *
 * @returns {Partial<Options>} Configuration for QR Code Generator
 */
export const generateQRCodeOptions = (code: string): Partial<Options> => {
  return {
    width: 400,
    height: 400,
    margin: 10,
    data: code,
    image:
      'data:image/png;base64,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',
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0,
    },
    dotsOptions: {
      type: 'dots',
      color: '#000000',
    },
    cornersSquareOptions: {
      type: 'extra-rounded',
      color: '#000000',
    },
    cornersDotOptions: {
      type: 'dot',
      color: '#000000',
    },
    backgroundOptions: {
      color: '#ffffff',
    },
  };
};

/**
 * Generates a mapping of services to common label groups.
 *
 * @param {ServiceGroupsToLabels} serviceGroupsToLabels Contains groups of related services by labels
 *
 * @returns {Services} Mapping of Services
 *
 * @throws If service names are not unique
 */
export const generateServices = (
  serviceGroupsToLabels: ServiceGroupsToLabels,
): Services => {
  const services = new Map<string, Service>();

  Object.entries(serviceGroupsToLabels).forEach(([serviceGroup, labels]) => {
    if (new Set(labels).size !== labels.length)
      throw new Error('Service Names must be unique');

    const serviceNameToServiceData: Service = {};

    labels.forEach((label) => {
      serviceNameToServiceData[label] = {
        status: false,
        timestamp: undefined,
      };
    });

    services.set(serviceGroup, serviceNameToServiceData);
  });

  return services;
};

/**
 * Returns all services that have not been used by a participant.
 *
 * @param {Services} services Map of services
 * @param {string} service Label of the service group
 *
 * @returns {string[]} Array of unused services
 */
export const getAvailableServicesByLabel = (
  services: Services,
  service: string,
) => {
  const serviceByUsage = services.get(service);
  return !serviceByUsage
    ? []
    : Object.keys(serviceByUsage).filter(
        (service) => !serviceByUsage[service].status,
      );
};
