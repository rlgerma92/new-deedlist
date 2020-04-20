import React from 'react';
import IdentityModal, {
  useIdentityContext,
} from 'react-netlify-identity-widget';

const SignIn = ({ children }) => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    'NoName';

  console.log(JSON.stringify(identity));
  const isLoggedIn = identity && identity.isLoggedIn;

  return (
    <>
      <button className="btn" onClick={() => setDialog(true)}>
        {isLoggedIn ? `Hello ${name}, Log out here!` : 'LOG IN'}
      </button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  );
};

export default SignIn;
