package com.edu.grooming.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.edu.grooming.dao.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


	User findByUseremailOrUserphonenumber(String useremail, String userphonenumber);

	@Transactional
	@Modifying
	@Query(value="delete from user where userid=?1",nativeQuery=true)
	void deleteUserById(Integer userid);
	
	@Query(value="select * from user where useremail=?1 and userpassword=?2",nativeQuery = true)
	User getUserByEmail(String useremail, String userpassword);

	@Query(value="select * from user where useremail=?1",nativeQuery = true)
	User getUserByEmailid(String useremail);

	@Transactional
	@Modifying
	@Query(value=" update user set useris_deleted=true where userid=?",nativeQuery=true)
	void updateUserisDeleted(Integer userid);

}
