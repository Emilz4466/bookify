package pl.com.bookify.server.commons.stereotypes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

@NoRepositoryBean
public interface Repository<T, I extends Serializable> extends JpaRepository<T, I> {


}

