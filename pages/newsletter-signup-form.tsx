import Link from "next/link";
import {Formik, Form, useField} from "formik";
import * as Yup from 'yup';
import {endpoints} from "../redux/rtk-api/newsletter-signup-api";
import {NewletterSigunupForm} from "../redux/types/newletter-sigunup-form";
import {useAppDispatch} from "../redux/hooks";

export default function NewsletterSignupForm() {
    const dispatch = useAppDispatch();

    function handleSubmit(values: NewletterSigunupForm, actions: any) {
        console.log(actions);
        // resetForm: function resetForm(nextState)
        // setErrors: function setErrors(errors)
        // setFieldError: function setFieldError(field, value)
        // setFieldTouched: function useEventCallback()
        // setFieldValue: function useEventCallback()
        // setFormikState: function setFormikState(stateOrCb)
        // setStatus: function setStatus(status)
        // setSubmitting: function setSubmitting(isSubmitting)
        // setTouched: function useEventCallback()
        // setValues: function useEventCallback()
        // submitForm: function useEventCallback()
        // validateField: function useEventCallback()
        // ValidateForm: function useEventCallback()

        //Promise will Return
        let result = dispatch(endpoints.addNewsletter.initiate(values));
        actions.resetForm();
        console.log(result);
    }


    const MyTextInput = (props: any) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input>. We can use field meta to show an error
        // message if the field is invalid and it has been touched (i.e. visited)
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{props.label}</label>
                <input className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
    };

    const MyCheckbox = ({children, ...props}) => {
        // React treats radios and checkbox inputs differently other input types, select, and textarea.
        // Formik does this too! When you specify `type` to useField(), it will
        // return the correct bag of props for you -- a `checked` prop will be included
        // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
        const [field, meta] = useField({...props, type: 'checkbox'});
        return (
            <div>
                <label className="checkbox-input">
                    <input type="checkbox" {...field} {...props} />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };

    const MySelect = (props: any) => {
        const [field, meta] = useField(props);
        return (
            <div>
                <label htmlFor={props.id || props.name}>{props.label}</label>
                <select {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };

    return (
        <>
            <div>
                <Link href='/'>
                    <a>
                        <h1>Home Page</h1>
                    </a>
                </Link>
            </div>
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        acceptedTerms: false, // added for our checkbox
                        jobType: '', // added for our select
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        acceptedTerms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                        jobType: Yup.string()
                            .oneOf(
                                ['designer', 'development', 'product', 'other'],
                                'Invalid Job Type'
                            )
                            .required('Required'),
                    })}
                    onSubmit={handleSubmit}>
                    <Form>
                        <div>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="jane@formik.com"
                            />
                        </div>
                        <div>
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>
                        </div>
                        <div>
                            <MyCheckbox name="acceptedTerms">
                                I accept the terms and conditions
                            </MyCheckbox>
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}