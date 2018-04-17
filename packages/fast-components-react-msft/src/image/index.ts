import * as React from "react";
import {
    IFoundationProps,
    IImageClassNameContract,
    IImageHandledProps,
    IImageUnhandledProps,
    Image
} from "@microsoft/fast-components-react-base";
import manageJss, { HOCProps } from "@microsoft/fast-jss-manager-react";
import { ImageStyles, IDesignSystem } from "@microsoft/fast-components-styles-msft";

export default manageJss(ImageStyles)(Image);
