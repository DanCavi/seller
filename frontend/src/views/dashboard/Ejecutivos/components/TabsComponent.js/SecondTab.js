import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import { IconSend } from '@tabler/icons-react';
import Input from 'ui-component/Input/Input';

const SecondTab = () => {




  return (
    <Stack direction={'column-reverse'} flex={1}>
      <Stack direction={'row'} sx={{ backgroundColor: '#cdcdcd'}} p={4} spacing={3}>
        <Input />
        <Button variant="contained"><IconSend /></Button>
      </Stack>
      <Stack p={4} spacing={3} direction={'column-reverse'}>
        <Stack direction='row' spacing={3}>
          <Avatar>AL</Avatar>
          <Paper  
            sx={{ 
              backgroundColor: '#dfdfdf',
              px: 2,
              pt: 2,
              maxWidth: '50%',
              
            }}>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque? Lorem ipsum dolor sit amet</Typography>
            <Typography sx={{float: 'right', mt: 1}} variant="caption" >15:40</Typography>
          </Paper>
        </Stack>
        <Stack direction='row-reverse' spacing={3}>
          <Avatar>BG</Avatar>
          <Paper 
            sx={{  
              backgroundColor: '#dfdfdf',
              px: 2,
              pt: 2,
              maxWidth: '50%',
            }}>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque? Lorem ipsum dolor sit amet</Typography>
            <Typography sx={{float: 'left', mt: 1}} variant="caption" >15:40</Typography>
          </Paper>
        </Stack>
      </Stack>
  </Stack>
  );
};

export default SecondTab;
