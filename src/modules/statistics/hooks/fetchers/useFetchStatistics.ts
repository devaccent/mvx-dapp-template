import { useEffect, useState } from "react";

import { StatisticsType } from "../../types";
import { DataStatus } from "../../../../app/enums";
import { StatisticsService } from "../../statistics.service";

export function useFetchStatistics() {
  const [status, setStatus] = useState<DataStatus>(DataStatus.Loading);
  const [statistics, setStatistics] = useState<StatisticsType | null>();

  useEffect(() => {
    StatisticsService.getStatistics()
      .then((data) => setStatistics(data))
      .then(() => setStatus(DataStatus.Loaded))
      .catch(() => {
        setStatistics(null);
        setStatus(DataStatus.Error);
      });
  }, []);

  return { status, statistics };
}
