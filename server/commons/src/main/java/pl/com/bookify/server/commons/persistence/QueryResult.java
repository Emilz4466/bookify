package pl.com.bookify.server.commons.persistence;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

public class QueryResult<T> {
    private List<T> list;
    private long totalElements;
    private Pageable pageable;
    private Sort sort;

    public static final int MAX_SIZE = 1000;

    public void setConfig(Pageable pageable, Sort sort) {
        this.pageable = pageable;
        this.sort = sort;
    }

    public void setList(List<T> list) {
        this.list = list;
        this.totalElements = list.size();
    }

    public List<T> getList() {
        return list;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public Pageable getPageable() {
        return pageable;
    }

    public Sort getSort() {
        return sort;
    }
}