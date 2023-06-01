import useSWR from "swr";
import ContentCard from "../../../components/ContentCard";
import { getMyPlanId, getPlans } from "../../../services/firebaseApi";
import { useMemo } from "react";

const Plans = () => {
  const { data: plansData, isLoading: isLoadingPlans } = useSWR('', getPlans)
  const { data: planIdData, error, isLoading: isLoadingMyPlanId } = useSWR('', getMyPlanId)

  const isLoading = useMemo(() => isLoadingPlans || isLoadingMyPlanId, [isLoadingPlans, isLoadingMyPlanId]);


  return <ContentCard loading={isLoading} title="Planes">

  </ContentCard>;
};

export default Plans;
