import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Desk from '../../components/templates/Desk';

test("年齡重疊的 select 是否有正確顯示錯誤提示，當輸入年齡有重疊時", () => {

    const errorMsg = "年齡區間不可重疊"
    const testSelects = [[5, 15, 10 ,20]]

    render(<Desk/>)

    const addCardBtnElement = screen.getByText('+ 新增價格設定')
    fireEvent.click(addCardBtnElement)

    const selectElements = screen.getAllByRole('combobox')
    selectElements.forEach((selectElement, index) => {
        fireEvent.change(selectElement, { target: { value: testSelects[index]}})
    })

    const errorMsgElementContent1 = screen.queryByTestId('card-error-1').textContent;
    const errorMsgElementContent2 = screen.queryByTestId('card-error-2').textContent;
   
    expect(errorMsgElementContent1).toBe(errorMsg)
    expect(errorMsgElementContent2).toBe(errorMsg)
})


