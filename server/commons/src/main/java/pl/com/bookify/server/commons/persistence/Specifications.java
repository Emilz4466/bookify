package pl.com.bookify.server.commons.persistence;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

public class Specifications<T> {
    Specification<T> spec;

    public void add(Object baseOn, Specification<T> specification) {
        if (baseOn != null) {
            if (this.spec != null) {
                this.spec = this.spec.and(specification);
            } else {
                this.spec = specification;
            }
        }
    }

    public void add(Specification<T> specification) {
        if (this.spec != null) {
            this.spec = this.spec.and(specification);
        } else {
            this.spec = specification;
        }
    }

    CriteriaQuery<T> addSpecs(Root<T> root, CriteriaQuery<T> query, CriteriaBuilder builder) {
        if (spec != null) {
            Predicate predicate = spec.toPredicate(root, query, builder);
            if (predicate != null) {
                return query.where(predicate);
            }
        }
        return query;
    }
}
