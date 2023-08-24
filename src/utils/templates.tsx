import { FC } from "react"
import { Flex } from "../components/Box"
import Theme from "../Theme"

export const MultipleComponentTemplate = (Component: FC<any>, list: any[], commonProps?: {}) => () => {
    return (
        <Theme>
            <Flex gap="30px" flexWrap="wrap">
                {list.map((item, index) => (
                    <Component key={index} {...commonProps} {...item} />
                ))}
            </Flex>
        </Theme>
    )
};

export const SingleComponentTemplate = (Component: FC<any>, props?: any) => () => {
    return (
        <Theme>
            <Component {...props} />
        </Theme>
    )
};