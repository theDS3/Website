const availableServicesByDate: Record<string, string[]> = {
  '2023-12-30': ['Check-In', 'Snacks'],
  '2023-12-31': ['Check-In', 'Breakfast', 'Lunch', 'Dinner'],
};

export const allAvailableServices = Object.fromEntries(
  Object.entries(availableServicesByDate).map(([date, availableServices]) => [
    date,
    Object.fromEntries(
      availableServices.map((service) => [
        service,
        { hasUsed: false, timestamp: 0 },
      ]),
    ),
  ]),
);
