package fr.cpe.ejb;

import javax.ejb.Local;
import fr.cpe.model.User;
 
 

@Local
public interface MessageSenderLocal  {
	
	public void sendMessage(String message);
	public void sendMessage(User user);
}
