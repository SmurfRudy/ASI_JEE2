package fr.cpe.rest.impl;


import fr.cpe.model.User;

import javax.inject.Inject;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import fr.cpe.ejb.MessageReceiverSyncLocal;
import fr.cpe.ejb.MessageSenderLocal;
//import javax.inject.Inject;
//import fr.cpe.dao.UserDao;
//import fr.cpe.model.User;
import fr.cpe.rest.IUserRestService;

public class UserRestService implements IUserRestService {
	
	@Inject
	MessageSenderLocal sender;
	@Inject
	MessageReceiverSyncLocal receiver;
	//UserDao userDao;

	/*@Override
	public User getUser(String login, String pwd) {
		//User user = userDao.getUser(login,pwd);
		User user =new User();
		user.setLastName("TEST");
		System.out.println(user.toString());
		return user;
		
	}*/
	@Override
	public Response getUser(User user) {
		System.out.println(user);
		sender.sendMessage(user);
		System.out.println("Sending to back .." + user);
		
		try{
		User response = receiver.receiveMessage();
		System.out.println("Response from back .." + user);
		System.out.println(response);
		return Response.ok(response).build();
		}
		catch(Exception e)
		{
			System.out.println("Error");
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
		}
		
		
		
	}
	
	@Override
	public String getTest() {
		System.out.println("hello world");
		return "hello world";
		
	}
	

}
