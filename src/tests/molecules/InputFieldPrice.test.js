import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputFieldPrice from '../../components/molecules/InputFieldPrice';

test("空白的 Input 是否有正確顯示錯誤提示", () => {

    render(<InputFieldPrice/>)
    const inputElement = screen.getByRole('textbox')
    
    const errorMsg = "不可以為空白"

    fireEvent.change(inputElement, {target: {value: ''}})
    
    expect(screen.getByText(errorMsg)).toBeInTheDocument()
})

test("入住費用是否有正確顯示千分位", () => {

    render(<InputFieldPrice/>)
    const inputElement = screen.getByRole('textbox')

    const inputValue = "1234567.89"
    const outputValue = "1,234,567.89"

    fireEvent.change(inputElement, {target: {value: inputValue}}) 

    expect(inputElement).toHaveValue(outputValue)
})