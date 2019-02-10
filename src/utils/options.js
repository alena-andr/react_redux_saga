export function createCompaniesList(arrayNetworks) {
  return arrayNetworks.map(company => ({
      id: company.id,
      name: company.company,
      country: company.location.country,
      city: company.location.city,
    })
  );
}

export function createStationsList(stations) {
  return stations.map(station => ({
      name: station.name,
    })
  );
}