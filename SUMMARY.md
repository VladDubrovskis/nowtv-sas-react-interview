# Summary

## How would you achieve this with Redux?
Setup the store, add async action to fetch the messages and then set it to store. Use `mapStateToProps` to bind it to component. Also setup redux dev tools.

## How would you handle an error from the API?
Sort of implemented a wrapper already, at the moment just returns empty lsit, in theory could show error message and log the message, plus use som sort of log aggregator to make a record of it.

## If you were to continue this application, what would you add?
- [ ] Separate the files to better folder structure
- [ ] Acceptance tests - Webdrive/Cucumber
- [ ] Add API
- [ ] Add ability to send messages without registration
- [ ] Add authentication
- [ ] Automate deployment
etc...

## If you were to deploy this application (or any web application) to production, how would you personally do it?
- Automate the CI/CD pipeline
- Make sure the tests are passing
- If tests are passing I would automatically push to production, with some sort of easy rollback or swtich off mechanism (e.g. feature flag)
- Make sure log aggregation is setup
- Minify the files - use the production env for build


## Finally, what did you think of the test? 😀
- INteresting to have a go at React with Redux, apart from that confusing why each team or even different parts of sub team have different tests :)