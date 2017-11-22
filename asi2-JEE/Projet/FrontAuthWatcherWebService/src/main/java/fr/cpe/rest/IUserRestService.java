package fr.cpe.rest;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import fr.cpe.model.User;

@Path("/WatcherAuth")

public interface IUserRestService {

	
	@GET
	@Produces("text/plain")
	@Path("/test")
	String getTest();
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	Response getUser(User user);
}
