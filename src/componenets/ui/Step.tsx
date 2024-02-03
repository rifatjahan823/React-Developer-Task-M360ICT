import { Flex } from 'antd';
import React from 'react';

const Step = () => {
    return (
        <div>
            <Flex align='center' justify='space-between'>
                <div style={{width:'15%',height:"4px",background:"#38CB89",borderRadius:"50px"}}></div>
                <div style={{width:'15%',height:"4px",background:"#38CB89",borderRadius:"50px"}}></div>
                <div style={{width:'15%',height:"4px",background:"#38CB89",borderRadius:"50px"}}></div>
                <div style={{width:'15%',height:"4px",background:"#38CB89",borderRadius:"50px"}}></div>
                <div style={{width:'15%',height:"4px",background:"#38CB89",borderRadius:"50px"}}></div>
                <div style={{width:'15%',height:"4px",background:"#F3F3F3",borderRadius:"50px"}}></div>
            </Flex>
        </div>
    );
};

export default Step;