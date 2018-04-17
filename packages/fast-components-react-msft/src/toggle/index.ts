import * as React from "react";
import {
    IFoundationProps,
    IToggleClassNameContract,
    IToggleHandledProps,
    IToggleUnhandledProps,
    Toggle
} from "@microsoft/fast-components-react-base";
import manageJss, { HOCProps } from "@microsoft/fast-jss-manager-react";
import { ToggleStyles, IDesignSystem } from "@microsoft/fast-components-styles-msft";

export default manageJss(ToggleStyles)(Toggle);
