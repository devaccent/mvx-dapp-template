// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { AutoSizer, List } from "react-virtualized";
import React, { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  children: ReactNode[];
};

type AutoSizerProps = {
  width: number;
  height: number;
};

type RowRendererProps = {
  key: string | number;
  index: number;
  isScrolling: boolean;
  isVisible: boolean;
  style: any;
};

export default function TokenPickerVirtualizedList(props: Props) {
  const { children } = props;

  const rowRenderer = (rowProps: RowRendererProps) => {
    const { key, index, style } = rowProps;

    return (
      <div key={key} style={style}>
        {children[index]}
      </div>
    );
  };

  const numberOfRows = children.length || 1;
  const rowHeight = 70;
  const maxListHeight = 2500;
  const currentListHeight = numberOfRows * rowHeight;
  const listHeight = currentListHeight > maxListHeight ? maxListHeight : currentListHeight;

  return (
    <div style={{ height: listHeight }}>
      <AutoSizer>
        {({ width, height }: AutoSizerProps) => (
          <List width={width} height={height} rowHeight={rowHeight} rowCount={numberOfRows} rowRenderer={rowRenderer} />
        )}
      </AutoSizer>
    </div>
  );
}
