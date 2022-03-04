module.exports = {
    secret: "bezkoder-secret-key",
    // jwtExpiration: 3600,         // 1 hour
    // jwtRefreshExpiration: 86400, // 24 hours
  
    /* for test */
    jwtExpiration: 6000,          // 1 minute
    jwtRefreshExpiration: 12000,  // 2 minutes
    BACKEND_DOMAIN: "https://vuejs-medium.herokuapp.com",
    FRONTEND_DOMAIN: "https://agitated-colden-958a3b.netlify.app"
  };
  