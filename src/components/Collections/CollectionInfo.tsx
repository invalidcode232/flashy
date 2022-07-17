import React from 'react';

type Props = {
    info: string;
    value: string;
};

const CollectionInfo = (props: Props) => {
    return (
        <div className="grid grid-cols-2 mr-5">
            <span className="text-gray-600">{props.info}</span>
            <span className="text-right font-semibold">{props.value}</span>
        </div>
    );
};

export default CollectionInfo;
