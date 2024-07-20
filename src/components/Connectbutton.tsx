import React, { useState } from "react";

export default function connectbutton() {
  const [accountCreatePending, setAccountCreatePending] = useState(false);
  const [accountUpdatePending, setAccountUpdatePending] = useState(false);
  const [connectedAccountUpdated, setConnectedAccountUpdated] = useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState();

  return (
    <div className="container">
      <div className="banner">
        <h2>Dream </h2>
      </div>
      <div className="content">
        {!connectedAccountId && <h2>Get ready for take off</h2>}
        {!connectedAccountId && (
          <p>
            Dream is the world's leading air travel platform: join our team of
            pilots to help people travel faster.
          </p>
        )}
        {connectedAccountId && (
          <h2>Add information to start accepting money</h2>
        )}
        {connectedAccountId && (
          <p>
            Dream partners with Stripe to help you receive payments while
            keeping your personal and bank details secure.
          </p>
        )}
        {!accountCreatePending && !connectedAccountId && (
          <div>
            <button
              onClick={async () => {
                setAccountCreatePending(true);
                setError(false);
                fetch("/api/account", {
                  method: "POST",
                })
                  .then((response) => response.json())
                  .then((json) => {
                    setAccountCreatePending(false);
                    const connectedAccountId = json.account;
                    setConnectedAccountId(connectedAccountId);
                  });
              }}
            >
              Sign up
            </button>
          </div>
        )}
        {connectedAccountId &&
          !accountUpdatePending &&
          !connectedAccountUpdated && (
            <div>
              <button
                onClick={async () => {
                  setAccountUpdatePending(true);
                  setError(false);
                  fetch(`/api/account/${connectedAccountId}`, {
                    method: "POST",
                  })
                    .then((response) => response.json())
                    .then((json) => {
                      setAccountUpdatePending(false);
                      setConnectedAccountUpdated(true);
                    });
                }}
              >
                Add information
              </button>
            </div>
          )}
        {connectedAccountUpdated && (
          <div className="example-form">
            <h2>Your onboarding flow goes here</h2>
          </div>
        )}
        {error && <p className="error">Something went wrong!</p>}
        {(connectedAccountId ||
          accountCreatePending ||
          accountUpdatePending) && (
          <div className="dev-callout">
            {connectedAccountId && (
              <p>
                Your connected account ID is:{" "}
                <code className="bold">{connectedAccountId}</code>
              </p>
            )}
            {accountCreatePending && <p>Creating a connected account...</p>}
            {accountUpdatePending && (
              <p>Adding some onboarding information...</p>
            )}
            {connectedAccountUpdated && (
              <div>
                <p>
                  Account onboarding has begun. Determine the{" "}
                  <a
                    href="https://docs.stripe.com/connect/required-verification-information"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    required information
                  </a>{" "}
                  you need to gather.
                </p>
                <p>
                  Build a flow to collect the required information from your
                  connected accounts and pass it to Stripe.
                </p>
              </div>
            )}
          </div>
        )}
        <div className="info-callout">
          <p>
            This is a sample app for API-based Connect onboarding.{" "}
            <a
              href="https://docs.stripe.com/connect/onboarding/quickstart?connect-onboarding-surface=api"
              target="_blank"
              rel="noopener noreferrer"
            >
              View docs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
