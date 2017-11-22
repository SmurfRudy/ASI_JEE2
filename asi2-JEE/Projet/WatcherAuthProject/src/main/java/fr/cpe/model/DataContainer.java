package fr.cpe.model;
import fr.cpe.model.User;

public class DataContainer {
	User user;
	
	public Role checkUser(User user){
		return Role.USER;
	}

}
