import * as React from "react";
import {
    IFoundationProps,
    ITypographyClassNameContract,
    ITypographyHandledProps,
    ITypographyUnhandledProps,
    Typography
} from "@microsoft/fast-components-react-base";
import manageJss, { HOCProps } from "@microsoft/fast-jss-manager-react";
import { TypographyStyles, IDesignSystem } from "@microsoft/fast-components-styles-msft";

export default manageJss(TypographyStyles)(Typography);
