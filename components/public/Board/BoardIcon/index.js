import React from 'react';

const BoardIcon = ({ isNew, isPhoto, isFile, className }) => {
    return (
        <>
            {isNew &&
                <span className={className}>
                    <img src="/img/icon_new.svg" width={16} height={16} alt="새 글" />
                </span>
            }
            {isPhoto &&
                <span className={className}>
                    <img src="/img/icon_photo.svg" width={15} height={15} alt="사진" />
                </span>
            }
            {isFile > 0 &&
                <span className={className}>
                    <img src="/img/icon_file.svg" width={16} height={15} alt="파일" />
                </span>
            }
        </>
    );
}

export default React.memo(BoardIcon);
