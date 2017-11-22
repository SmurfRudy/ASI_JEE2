package fr.cpe.dao;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import fr.cpe.model.User;

@Stateless
public class UserDao {
	
	@PersistenceContext
	EntityManager em;
	
	/*
	public User getUser(Integer id) {
		return (User)em.createQuery("from User u where u.id = :id")
			.setParameter("id", id)
			.getSingleResult();
	}
	*/

	public User getUser(String login, String pwd) {
		User user =new User();
		return user;
		/*return (User)em.createQuery("from T_USERS u where u.login = :login and u.password = :pwd")
				.setParameter("login", login)
				.setParameter("pwd", pwd)
				.getSingleResult();*/
		//Attention avec singleResult() exception à gérer. (voir Java Doc)
	}

}
