# Day 4: Refactor Challenge
- Renamed vague variables: d -> currentDate, x -> adultUsers
- Extracted fetchWeather() and renderWeather() - one job per function
- Added try/catch for network errors
- Removed magic numbers: MIN_PASSWORD_LENGTH = 8, ONE_DAY_MS = 86400000

# Day 5: Weather Dashboard Code Review
- [ ] Does it handle network errors? Add try/catch
- [ ] Does it handle empty city? Add validation
- [ ] Is code split into modules? Move api calls to api.js
- [ ] Are variable names meaningful? Rename d -> date
- [ ] Add loading state while fetching
- [ ] No unused variables, use === not ==
