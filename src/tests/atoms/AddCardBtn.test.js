import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import AddCardBtn from '../../components/atoms/AddCardBtn';

test("當所有年齡範圍已經包含 0 到 20 歲時，新增價格設定需要 disabled", () => {

    const ageState = { 
        overlap: [], 
        notInclude: [] 
    }

    render(<AddCardBtn ageState={ageState}/>)

    const addCardBtn = screen.getByText('+ 新增價格設定')

    expect(addCardBtn).toBeDisabled()

})