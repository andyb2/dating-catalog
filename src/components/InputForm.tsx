import { url } from 'inspector';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TypePredicateKind } from 'typescript';
import { list } from '../app/dateSlice';

const Input = styled.input`
    font-family: 'Arial';
    border: none;
    border-bottom: 1px solid grey;
    background-color: rgb(51, 51, 51);
    font-size: 30px;
    color: grey;
    // padding: 0;
    width: 250px;
    min-width: 1em;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightgrey;
        caret-color: lightgrey;
        color: lightgrey;
    }
`

const Parent = styled.div`
    display: flex;
    justify-content: center;
    // margin: 1rem;
    width: 100%;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    gap: 0.4rem;
`;

const Content = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
`;

const Title = styled.p`
    padding: 0;
    margin: 0;
    color: grey;
    font-size: 30px;
    font-family: 'Arial';
`;

const Location = styled.div``;

const LocationTitle = styled.p``;

const DropDown = styled.select`
    // width: 150px;
    border: none;
    background-color: rgb(51, 51, 51);
    border-bottom: 1px solid grey;
    color: grey;
    font-size: 30px;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightgrey;
        caret-color: lightgrey;
        color: lightgrey;
    }
`

const DropDownItem = styled.option``

const SaveButton = styled.button`
    width: 100px;
    background-color: rgb(51, 51, 51);
    border: none;
    outline: none;
    padding: 0.3rem;
    color: grey;
    font-size: 30px;
    margin-top: 0.5rem;
    &:hover {
        color: lightgrey;
        cursor: pointer;
    }
`;

const InputForm = () => {
    const dispatch = useDispatch();
    const nameRef = useRef<HTMLInputElement | null>(null);
    const locationRef = useRef<HTMLInputElement | null>(null);
    const urlRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);

    const submitForm = (e: any) => {
        e.preventDefault();
        const formObject = {
            name: nameRef.current?.value,
            location: locationRef.current?.value,
            url: urlRef.current?.value,
            dateType: typeRef.current?.value,
        };
        dispatch(list(formObject));
        console.log(typeRef)
        nameRef.current!.value = '';
        locationRef.current!.value = '';
        urlRef.current!.value = '';
        typeRef.current!.selectedIndex = 0;
    }

    return (
        <Parent>
            <Form onSubmit={(e) => submitForm(e)}>
                <Content>
                    <Title>
                        I want to go to
                    </Title>
                    <Input type='text' ref={nameRef} required/>
                </Content>
                <Content>
                    <Title>
                        Located in
                    </Title>
                    <Input required ref={locationRef}/>
                    <Title>
                        .
                    </Title>
                </Content>
                <Content>
                    <Title>
                        Google Maps URL
                    </Title>
                    <Input ref={urlRef}/>
                </Content>
                <DropDown ref={typeRef} required>  
                    <DropDownItem value=''> Select activity type </DropDownItem>  
                    <DropDownItem> Restaurant </DropDownItem>  
                    <DropDownItem> Things to do </DropDownItem>  
                    <DropDownItem> tutorialspoint </DropDownItem>  
                    <DropDownItem> geeksforgeeks </DropDownItem>  
                </DropDown>  
                <SaveButton>
                    Save
                </SaveButton>
            </Form> 
        </Parent>
    )
}

export default InputForm;