import React, { PropsWithChildren } from "react";
import { AxiosInterceptorContext } from "@multiversx/sdk-dapp/wrappers";

import { AppEnvironment } from "../../../app/environment";

export default function MvxAxiosContext(props: PropsWithChildren) {
  const { children } = props;

  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor authenticatedDomanis={AppEnvironment.mvx.nativeAuthDomains}>
        {children}
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
}
