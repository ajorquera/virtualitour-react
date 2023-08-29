import useSWR from "swr";
import ContentCard from "../../../components/ContentCard";
import { getMyPlanId, getPlans } from "../../../services/firebaseApi";
import { useMemo } from "react";
import Text, { Heading } from "../../../components/Text";
import Plan from "../../../components/Plan/Plan";
import Switch from "../../../components/Switch/Switch";
import Box, { Flex } from "../../../components/Box";

const Plans = () => {
  const { data: plansData, isLoading: isLoadingPlans } = useSWR('', getPlans)
  const { data: planIdData, error, isLoading: isLoadingMyPlanId } = useSWR('', getMyPlanId)

  const isLoading = useMemo(() => isLoadingPlans || isLoadingMyPlanId, [isLoadingPlans, isLoadingMyPlanId]);


  return (
    <>
      <Heading variant="h1">Plans</Heading>

      <Box my={3}>
        <Text as="p">Please select the best plans that suit you</Text>
      </Box>
      <Switch labelPos="right" label="Monthly" />

      <Flex style={{ marginTop: 20 }} justifyContent="space-evenly" flexWrap="wrap">
        <Plan selected title="Plan" features={['dsfdf', 'sdfsdf']} />
        <Plan title="Plan" price={34.34} features={['dsfdf', 'sdfsdf']} />
      </Flex>

    </>
  );
};

export default Plans;
