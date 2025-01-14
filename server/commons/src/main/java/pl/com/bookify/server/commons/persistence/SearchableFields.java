package pl.com.bookify.server.commons.persistence;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class SearchableFields {

    private final Set<String> allowedFields = new HashSet<>();

    public SearchableFields(String... fields) {
        addAllowedFields(fields);
    }

    private void addAllowedFields(String... fields) {
        Collections.addAll(allowedFields, fields);
    }

    public boolean isFieldAllowed(String fieldName) {
        return allowedFields.contains(fieldName);
    }

    public Set<String> getAllowedFields() {
        return allowedFields;
    }
}
