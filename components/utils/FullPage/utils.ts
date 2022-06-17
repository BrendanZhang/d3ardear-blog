import React, { ReactElement, ReactFragment, useCallback, useEffect, useRef } from "react";

export const isEmpty = (
  value: number | null | undefined | ReactElement | ReactFragment | React.ReactNode
) => value === undefined || value === null;
export const isNull = (value: number) => value === null;
