import React, { useCallback, useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열기
    const open = useCallback(() => {
        setIsOpen(() => true);
    }, []);

    // 모달 닫기
    const close = useCallback(() => {
        setIsOpen(() => false);
    }, []);

    return {open, close, isOpen};
};

export default useModal