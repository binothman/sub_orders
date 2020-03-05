import HOCReduxForm from 'atoms/HOCReduxForm';
import OrderStatuses from './OrderStatuses';
import HOC from './HOC';

import { statuses } from './dummy.json';


const formConfig = {
  form: 'OrderStatuses',
  initialValues: { statuses },
};

export default HOCReduxForm(formConfig)(HOC(OrderStatuses));
