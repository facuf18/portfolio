import {
  Box,
  Text,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  return (
    <Box bgColor='orange.100' w='100%' h='auto' py={10} id='contact'>
      <Container maxWidth='1400px' margin='auto'>
        <VStack align='center' gap={6}>
          <Heading color='orange.500' size='3xl' textTransform='uppercase'>
            Contact
          </Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              name: Yup.string().required('Name required'),
              email: Yup.string()
                .email('Invalid email format')
                .required('Email required'),
              subject: Yup.string().required('Subject required'),
              message: Yup.string().required('Message required'),
            })}
            onSubmit={(values, actions) => {
              emailjs.send(
                'service_t6urq6b',
                'template_zgi7k09',
                values,
                'SX0dwMF2DB6Y1Ptxe'
              );
              toast.success('Email sended correctly', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              actions.resetForm();
            }}
          >
            {props => (
              <Form>
                <FormControl
                  isInvalid={!!props.errors.name && !!props.touched.name}
                  width={{ base: '300px', md: '400px' }}
                  isRequired
                >
                  <FormLabel>Name</FormLabel>
                  <Input
                    name='name'
                    placeholder='Name'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    bgColor='orange.50'
                  />
                  <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  mt={4}
                  isRequired
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    name='email'
                    placeholder='Email'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    bgColor='orange.50'
                  />
                  <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!props.errors.subject && !!props.touched.subject}
                  mt={4}
                  isRequired
                >
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name='subject'
                    placeholder='Subject'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.subject}
                    bgColor='orange.50'
                  />
                  <FormErrorMessage>{props.errors.subject}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!props.errors.message && !!props.touched.message}
                  mt={4}
                  isRequired
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name='message'
                    placeholder='Message'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.message}
                    bgColor='orange.50'
                  />
                  <FormErrorMessage>{props.errors.message}</FormErrorMessage>
                </FormControl>
                <Button
                  type='submit'
                  variant='solid'
                  colorScheme='orange'
                  mt={4}
                  isLoading={props.isSubmitting}
                >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </VStack>
      </Container>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
}

export default Contact;
